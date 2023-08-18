import ISettings from '@/interfaces/ISettings';
import Link from 'next/link';
import React from 'react'

interface IFooter {
  data: ISettings[];
}

const Footer: React.FC<IFooter> = ({ data }) => {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content ">
      {/* footer menu */}
      <div className="my-4 flex">

        <div className="text-right pr-5">
          <p className="text-[.75rem] text-gray-400">{data[0].copyright}</p>
          <p className="text-[.75rem] text-gray-400">Created by <a href="https://gaborjuhasz.de">Gábor Juhász</a></p>
          <p className="text-[.75rem] text-gray-400"><a href="https://github.com/gabjuh/david-portfolio">a React/NextJS Project</a></p>
        </div>
        <div className="text-left">
          <Link className="mx-2 block" href="impressum">Impressum</Link>
          <Link className="mx-2 block" href="agb">AGB</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer