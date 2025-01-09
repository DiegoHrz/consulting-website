
import AccordionElement from "./AccordionElement";
import Title from "./customTags/Title";



const FAQ = () => {


  return (
    <div className="sm:px-14 px-14 max-w-7xl mx-auto" >
      <Title text="FAQ" additionalClasses="text-center" />
      <p className="font-vollkorn text-center pb-8" > Most questiones asked by our customers</p>
      <AccordionElement/>
    </div>
  )
}

export default FAQ