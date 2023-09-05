import packageJson from '../../../package.json';
import config from '../../../config.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n
  ${commands}
  \n
-----
[tab]\t trigger completion.
[ctrl+l] clear terminal.
[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// export const gui = async (args: string[]): Promise<string> => {
//   window.open('', '_self');

//   return 'Opening GUI version...';
// };

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
    bunch
    of
    fake
    directories 
    :)`;
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:kjamolkhon@gmail.com');

  return 'Opening mail...';
};


export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args?: string[]): Promise<string> => {
  return `you know what? just use 'vscode'.`;
};

export const vscode = async (args?: string[]): Promise<string> => {
  return `real programmers user 'vi'.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: unable to run the command '${args[0]}' as root.
          With little power comes... no responsibility?`
};

export const arcticles = async (args?: string[]): Promise<string> => {
  return `To be added...`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(`${packageJson.repository.url}`, '_blank');
  }, 1000);

  return 'Opening repository...';
};

// export const donate = async (args?: string[]): Promise<string> => {
//   window.open(packageJson.funding.url, '_blank');

//   return 'Opening donation url...';
// };

export const banner = (args?: string[]): string => {
  return `                           
  '7MMF'                                '7MM '7MM     '7MM                           
    MM                                    MM   MM       MM                           
    MM  /6"Yb. '7MMpMMMb.pMMMb.  ,pW"Wq.  MM   MM  /MP' MMpMMMb.  ,pW"Wq.'7MMpMMMb.  
    MM TV   MM   MM    MM    MM 6W'   'Wb MM   MM ;Y    MM    MM 6W'   'Wb MM    MM  
    MM  ,pm9MM   MM    MM    MM 8M     M8 MM   MM;Mm    MM    MM 8M     M8 MM    MM  
U   MM 8M   MM   MM    MM    MM YA.    A9 MM   MM 'Mb.  MM    MM YA.   ,A9 MM    MM  
°mmm9° 'Moo9^Yo.JMML  JMML  JMML.'Ybmd9'  MML. MML  YA.JMML  JMML.'Ybmd9'.JMML  JMML.  v${packageJson.version}

Type 'help' to see list of available commands.
Type 'neofetch' to display the summary.
Type 'theme' to change the theme.

-----
`;
};
