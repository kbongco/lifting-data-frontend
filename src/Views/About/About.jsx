export default function About() {
  return (
    <>
      <section className='lifting-about-me-questions'>
        <h2 className='lifting-about-headers'>What is this project about?</h2>
        <article>
        <p className='lifting-answered-questions'>
          Hi! My name is Kathleen and I am a web developer for my day job and I'm also a competitive powerlifter in the USAPL in the state of NJ. 
          This project is a personal/fun project of mine which shows off some data from my last meet prep from December 2022.
          </p>
        </article>
        <h2 className='lifting-about-headers'>Powerlifting? What's that? </h2>
        <article>
          <p className='lifting-answered-questions'>
            Powerlifting is a sport that tests your strength on 3 lifts, the Squat, the bench and the deadlift. You have 3 attempts on each lift where you have to lift to a certain standard and to certain commands. There are different weight classes and divisions that one can compete in. Highest total wins! 
          </p>
        </article>
        <h2 className='lifting-about-headers'>Why did you make this project? </h2>
        <article><p className='lifting-answered-questions'>
          I made this project for fun and a way for me to develop a fullstack application. The data I turned into an API using Ruby on Rails, and the front end I used React and a library called Chart.js. In addition, I like data visualization and trying to figure out random patterns in data, figured I'd try something like this. 
          For more details, you can check out the ReadMe.md on my github. 
          </p>
        </article>
        <h2 className='lifting-about-headers'>Why the blue color scheme?</h2>
        <article>
          <p className='lifting-answered-questions'>
            Blue is my favorite color and my go to for a lot of things. For the purpose of development on this project I chose shades of blue that would ensure that it would be accesible for any color-blind viewers.
          </p>
        </article>
      </section>
    </>

  )
}