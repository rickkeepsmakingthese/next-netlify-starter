import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Creating beyond the parameters of Science</title>
      </Head>

      <main>
        <Header title="Creating beyond the parameters " />
        <p className="description">
         <p>Often lost beyond a state of being, art is viewed as a privelege and luxury; 
        the recognition that we value are within a subjective manner and yet clamour for the creation of it
        in a collective craze displays a hypnotic grasp that art has upon us all.
        Perhaps then it is vital to view2 the conception and constant hunger for art for what it truly is;
        A survival instinct. </p>
        <img src="https://wallpapercave.com/wp/wp4138551.jpg" alt="The Truman Show (dir. Peter Weir)">
  </body></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
