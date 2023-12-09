
export default function MenuItem(){
    return(
        <div className="bg-gray-200 p-4 rounded-lg text-center 
        hover:bg-white hover:shadow-2xl hover:shadow-amber-200 transition-all">
            <div className="text-center">
            <img src="/pizza.png" className="max-h-auto max-h-24
            bloack mx-auto"
             alt="pizza"/>
            </div>
                    
            <h4 className="font-semibold text-xl my-2"> Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">
                Loreum ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                Add to cart $12
            </button>
        </div>
    );
}