import MessageResponse from "./MessageRespons";

export default interface ErrorResponse extends MessageResponse {
  stack?: string;
}
