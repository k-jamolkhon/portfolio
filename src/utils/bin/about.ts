import { getBio } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  // const bio = await getBio();

  return `
  Hi 👋, I'm Jamolkhon. I am 22 years old student, seeking opportunities to enlarge 
  my knowledge and experience in cyber security field. My goal is to leverage my experience 
  and knowledge to make a positive impact in the cybersecurity industry. I am eager to learn 
  from experienced professionals in the field and to contribute my skills and expertise. 
  I'm always eager to expand my network and learn from others in the field.
  `
};
