'use client'
import Wrapper from "../hoc/Wrapper";
import AccordionElement from "./AccordionElement";
import Title from "./customTags/Title";



const FAQ = () => {


  return (
    <div >
      <Title text="FAQ" additionalClasses="text-center" />
      <p className="font-vollkorn text-center pb-8" > Most questiones asked by our customers</p>
      <AccordionElement/>
    </div>
  )
}

export default Wrapper(FAQ,'faq') 