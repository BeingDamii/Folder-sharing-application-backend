import express, { Application, Request, Response } from "express";
const multer = require("multer");
const path = require("path");

// set storage engine
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (
    req: any,
    file: { originalname: any },
    cb: (arg0: null, arg1: string) => void
  ) {
    const originalname = path.parse(file.originalname).name;
    const timestamp = Date.now();
    const newFilename = `${originalname}-${timestamp}${path.extname(
      file.originalname
    )}`;
    cb(null, newFilename);
  },
});

// upload variables
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req: any, file: any, cb: any) {
    checkFileType(file, cb);
  },
}).single("myImage");

// check file type
function checkFileType(
  file: { originalname: any; mimetype: string },
  cb: (arg0: string | null, arg1: boolean | undefined) => void
) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|doc|pdf/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Invalid fileType", false);
  }
}

const app: Application = express();

app.use(express.static("./public"));
app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "public", "uploads"))
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>hello world</h1>");
});



app.post("/upload", (req: Request, res: Response) => {
  upload(req, res, (err: any) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    const file = req.file; // Type assertion for req.file
    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Process the uploaded file here
    const filePath = `/public/uploads/${file.filename}`; // Construct the file path
    const serverHost = req.hostname; // Get the server hostname
    const imageLink = `http://${serverHost}${filePath}`; // Generate the image link

    console.log("File uploaded: " + file.filename);
    res.status(200).json({
      message: "File uploaded successfully",
      imageLink: imageLink, // Return the image link along with the success message
    });
  });
});





app.listen(5000, () => {
  console.log("server runing on port 5000");
});
