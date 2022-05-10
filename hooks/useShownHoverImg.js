import { useMemo , useState} from 'react';

const useShownHoverImg = () => {

    const [isShownHoverImg, setIsShownHoverImg] = useState({
      isShownHover:false,
      imgPosition:"upImg"
    });
  
    const showWithHoverImgHandler = (isShownHover , imgPosition) => {
      setIsShownHoverImg({
        isShownHover,
        imgPosition
      })
    }
  
    const ShownHoverImgUp = useMemo(() => {
        return !isShownHoverImg?.isShownHover && "upImg" == isShownHoverImg?.imgPosition ? "active" : ""
    })
  
    const ShownHoverImgDown = useMemo(() => {
        return isShownHoverImg?.isShownHover && "downImg" == isShownHoverImg?.imgPosition ? "active" : ""
    })
  
    return{
      showWithHoverImgHandler,
      ShownHoverImgUp,
      ShownHoverImgDown
    }
  
  };

export default useShownHoverImg