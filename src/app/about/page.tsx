import React from 'react'
import './about.css'
import Image from 'next/image'

const About = () => {
  return (
    <main className='about'>
        <div>
        <h2 className='abouthead'>About
        </h2>
        <p className='aboupara '>Welcome to Bread Bakery, where every loaf is crafted with love and quality ingredients. From traditional sourdough to freshly baked pastries, we are dedicated to bringing warm, wholesome bread to your table. Enjoy the simple joy of our freshly baked goodness!</p>
        </div>
        <div className='aboutdiv '>
            {/* leftdiv */}
            <div className='leftdiv '>
                <Image
                className='aboutImg'
                height={500}
                width={500}
                src="/about.avif"
                alt="aboutImag"/>
            </div>



            {/* rightdiv */}
            <div className='rightdiv'>
                <h2 className='abouth2'>What Is Your Favourite Bread For Your Sandwich</h2>
                <p className='aboutp'>What is your favorite bread for a sandwich? At Bread Bakery, we believe that every great sandwich starts with the perfect bread. Whether it is the hearty crunch of a rustic sourdough, the soft, pillowy layers of brioche, or the classic taste of whole-grain, each bread brings its own flavor and texture to enhance your sandwich experience. Explore our wide selection, freshly baked with premium ingredients, and find the ideal base for your next delicious creation!</p>
                <p className='aboutp'>Choosing the right bread can turn a simple sandwich into something truly memorable. At Bread Bakery , we offer a range of freshly baked options designed to elevate every bite. From soft, fluffy focaccia to nutty whole-grain and crisp baguettes, each variety brings unique flavor and texture. Discover your favorite and let our bread be the foundation of your best sandwiches yet!</p>
                <button className='aboutbtn '>Explore More</button>
            </div>
        </div>


        {/* hot deals div */}
        <div className='hotDeal'>
            <h2 className='hoth2'>Hot Deals</h2>
            <p className='hotP'>Irresistible deals on fresh bread! Enjoy bakery-quality favorites at unbeatable prices grab your hot deals today</p>
            <div className='hotDiv'>
                {/* leftdiv */}
                <div className='hotLeft'>
                    <Image
                    className='hotImg'
                    height={500}
                    width={500}
                    src="/hotleft.avif"
                    alt='hotDiv'/>
                    
                </div>


                {/* rightDiv */}
                <div className='hotRight'>
                    <div className='top'>
                    <div className='rigthTop1 '>
                        <div className='top1'>
                        <Image
                        className='right'
                        height={500}
                        width={500}
                        src="/right1.jpg"
                        alt='left1'/>
                        </div>
                        <div className='rightp1'>
                            <p>$35.90</p>
                        <p className='discount'>$45.90</p>
                        </div>
                        </div>
                        <div className='rigthTop2 sm:pl-0'>
                            <div className='top2'>
                        <Image
                        className='right'
                        height={500}
                        width={500}
                        src="/right4.jpg"
                        alt='left2'/>
                        </div>
                        <div className='rightp2'>
                        <p >$30.90</p>
                        <p className='discount'>$40.90</p>
                    </div>
                    </div>
                    </div>

                    <div className='Bottom'>
                        <div className='rightbottom1'>
                            <div className='btm1'>
                    <Image
                        className='right'
                        height={500}
                        width={500}
                        src="/right3.jpg"
                        alt='left1'/>
                        </div>
                        <div className='btmp1'>
                            <p>$40.90</p>
                        <p className='discount'>$55.90</p>
                        </div>
                        </div>

                        <div className='rightbottom2'>
                            <div className='btm2'>
                        <Image
                        className='right'
                        height={500}
                        width={500}
                        src="/right2.jpg"
                        alt='left2'/>
                        </div>
                        <div className='btmp2'>
                        <p >$20.90</p>
                        <p className='discount'>$30.90</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default About