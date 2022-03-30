export default function isValidKey(
  key: string | symbol,
  object: object
): key is keyof typeof object {
  return key in object
}
