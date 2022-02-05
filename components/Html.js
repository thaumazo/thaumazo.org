export default function Html({html, ...rest}) {
  return (
    <div
      {...rest}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
