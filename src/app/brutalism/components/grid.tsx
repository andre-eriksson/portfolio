export default function Grid() {
  return (
    <div className='absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none'>
      {Array.from({ length: 12 }).map((_, rowIndex) =>
        Array.from({ length: 12 }).map((_, colIndex) => (
          <div
            key={`${rowIndex}-${
              // biome-ignore lint/suspicious/noArrayIndexKey: This is fine
              colIndex
            }`}
            className='border border-black/10'
          />
        ))
      )}
    </div>
  )
}
