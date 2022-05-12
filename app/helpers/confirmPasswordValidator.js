export function confirmPasswordValidator(password,confirmPassword) {
  if (!confirmPassword) return "ConfirmPassword can't be empty."
  if (password != confirmPassword) return "Password and confirmation password don't match."
  return ''
}
