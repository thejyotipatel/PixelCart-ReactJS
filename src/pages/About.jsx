const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-4 items-center justify-center flex-col'>
        <h1 className='text-3xl font-bold leading-none tracking-tight'>
          About
          <div className='ml-4 stats bg-primary shadow'>
            <div className='stat'>
              <div className='stat-title text-primary-content text-3xl font-bold tracking-widset'>
                PixelCart
              </div>
            </div>
          </div>
        </h1>
        <p className='mt-4 text-md leading-8 max-w-2xl mx-auto'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
          eligendi voluptatum. Dolorem sunt exercitationem, distinctio, pariatur
          natus vel totam ullam rem deserunt tempore facere beatae animi eaque,
          praesentium ipsa. Reiciendis.
        </p>
      </div>
    </>
  )
}
export default About
