export const isImage = (message) =>
  message &&
  message.attachments &&
  message.attachments?.length > 0 &&
  message.attachments[0] &&
  message.attachments[0].file;
