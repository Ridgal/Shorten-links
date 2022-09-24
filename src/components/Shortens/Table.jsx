import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { selectLinks } from "Redux/link/linkSlice";

const Table = () => {

  const [copiedLinks, setCopiedLinks] = useState(0);
  const links = useSelector(selectLinks);

  const copyToClipBoard = (link) => {
    navigator.clipboard.writeText(`http://79.143.31.216/s/${(link)}`).then(() => {
      setCopiedLinks(link);
    })
    console.log(`http://79.143.31.216/s/${(link)}`)
  };
  
  return (
    <>
      {links?.map((item, index) => (
        <AnimatePresence key={index}>
          <motion.div 
            className="bg-indigo-200 rounded-xl mb-2 border-cyan-600"
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}>
            <table className="w-full divide-y divide-slate-500">
              <tbody className="">
                <tr className="h-12 md:h-8">
                  <td className="font-Quicksand font-semibold text-lg pl-6 w-[40%] md:px-2 sm:px-1 md:text-sm sm:text-xs text-gray-800 whitespace-nowrap">
                    {item[2]}
                  </td>
                  <td className="font-Quicksand font-semibold text-lg  md:px-2 sm:px-1 md:text-sm sm:text-xs text-gray-800 whitespace-nowrap">
                    <button>
                      {`http://79.143.31.216/s/${item[1]}`}
                    </button>
                  </td>
                  <td className="px-6 md:px-2 text-sm sm:text-xs font-medium text-right whitespace-nowrap">
                    <button 
                      className="text-white h-8 md:h-6 bg-blue-700 hover:bg-blue-800 hover:text-white focus:ring-2 focus:outline-1 focus:ring-blue-300 font-medium rounded-lg w-24 md:w-16 sm:w-11 md:px-3 sm:px-0 text-sm sm:text-xs px-5 text-center"
                      onClick={() => copyToClipBoard(item[1])}>
                      {copiedLinks === item[1] ? 'Copied' : 'Copy'}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </AnimatePresence>
      ))}
    </>
  )
};

export { Table };