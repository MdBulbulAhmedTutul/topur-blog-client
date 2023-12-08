
// eslint-disable-next-line react/prop-types
const Card = ({ service }) => {
    // eslint-disable-next-line react/prop-types
    const { image, published_date, title } = service;
    console.log(service)
    return (
        <div className="shadow-xl rounded-lg p-2">
            <img className="w-full rounded-md" src={image} alt="" />
            <h3 className="text-[18px] font-bold my-2 text-black hover:text-green-700 cursor-pointer">{title}</h3>
            <p className="text-gray-600">{published_date}</p>
        </div>
    );
};

export default Card;