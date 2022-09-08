import express from "express";

import MessageResponse from "../interfaces/MessageRespons";

const router = express.Router();

router.get<{}, MessageResponse>("/healthcheck", (req, res) => {
  res.json({
    message: "We Are Good To Go :D",
  });
});

export default router;
