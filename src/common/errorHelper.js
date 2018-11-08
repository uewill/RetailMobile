export function newError(title, message) {
  return { iserror: true, title: title, message: message };
}