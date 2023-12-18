"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							Greetings! I'm Sangita, a seasoned MERN Stack Developer, where my love for coding meets a penchant for eloquent writing.
						</p>
						<p>
							With a passion deeply rooted in technology, I specialize in developing robust web applications using a spectrum of cutting-edge technologies. My proficiency spans across multiple programming languages, including Java, SQL, and the MERN stack - MongoDB, Express.js, Node.js, React.js, and Next.js.
						</p>
						<p>My journey in the world of coding has equipped me with the skills to architect scalable and efficient solutions, blending creativity with technical precision.</p>
						<p className="my-3.5">
							I take pride in my ability to transform innovative ideas into tangible, user-friendly experiences, ensuring that every project I undertake is not just functional but also aesthetically pleasing.
						</p>
						<p>
							Beyond the realm of coding, I extend my expertise to technical content writing. Armed with a wealth of knowledge, I craft engaging and informative articles that bridge the gap between complex concepts and user-friendly content.
						</p>
						<p className="my-3.5">
							In the ever-evolving landscape of technology, I am dedicated to continuous learning and growth. Let's embark on a journey of innovation and excellence together. Welcome to my portfolio!
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
