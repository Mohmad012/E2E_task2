import Link from 'next/link';
import Atag from "../../../components/Atag";
import LiTag from "../../../components/LiTag"


const BreadcrumbSec = ({
  Class,
  addPath,
  path,
  text
}) => {

    return (
      <LiTag className={Class}>
        {addPath ? (
          <Link href={path}>
            <Atag>
              {text}
            </Atag>
          </Link>
        ): !addPath ? (
          <Atag href={path}>
            {text}
          </Atag>
        ): text}
      </LiTag>
    );
};

export default BreadcrumbSec