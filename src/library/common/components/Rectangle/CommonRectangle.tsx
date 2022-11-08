import TopRectangle from "./TopRectangle";
import BottomRectangle from "./BottomRectangle";

const CommonRectangle = ({ top }: { top: boolean }) => {
   return (
      <>
         {
            top
               ? <TopRectangle />
               : <BottomRectangle />
         }
      </>
   );
}

export default CommonRectangle;