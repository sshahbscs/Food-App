export default function SectionHeader({subheader,mainheader}){
    return(
        <>
            <h3 className="uppercase text-gray-600 
            font-semibold leading-4">
                 {subheader}
                 </h3>
            <h2 className="text-primary font-bold 
            text-4xl italic">
                
                {mainheader}
                </h2>
        </>
);
}