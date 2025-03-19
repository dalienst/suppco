
function NoResults({message}) {
  return (
    <div className="grid place-content-center">
        <img src="/no-result.png" alt="no result" className="h-[50vh]" />
        <p className="text-center">{message}</p>
    </div>
  )
}

export default NoResults