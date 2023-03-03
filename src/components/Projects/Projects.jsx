import React from 'react';
import { motion } from 'framer-motion';
import ProjectsSlider from './ProjectsSlider/ProjectsSlider';
import { web, game, blockchain } from './Projects.constants';
import { projectsAnim } from './Projects.anim';
import { useChangeDocumentTitle } from '../../helpers/useChangeDocumentTitle';

export default function Projects({ pageTitle }) {
	useChangeDocumentTitle(pageTitle);

	return (
		<motion.section className='projects' variants={projectsAnim} initial='init' animate='anim' exit='end'>
			<ProjectsSlider category='Full Stack' data={web} />
			<ProjectsSlider category='Game' data={game} />
			<ProjectsSlider category='Blockchain' data={blockchain} />
		</motion.section>
	);
}
