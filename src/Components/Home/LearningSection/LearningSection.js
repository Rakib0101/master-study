import React from 'react';

const LearningSection = () => {
    return (
        <div className="primary-bg py-32">
            <div className="container mx-auto flex items-center text-white justify-between">
                <div className="text-left w-1/2">
                    <h1 className="text-6xl ">What will you learn<br />to cook:</h1>
                    <p>Art party meggings subway tile, selfies helvetica tofu before they sold out slow-carb chillwave humblebrag vape heirloom meh shaman. Everyday carry af before they sold out VHS whatever. Keffiyeh taiyaki crucifix gentrify.</p>
                </div>
                <div className="w-1/2 px-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="glass-effect text-center rounded">
                            <img className="mx-auto py-4" src="./images/muffin.png" alt="" />
                            <h2 className="py-2">Deserts</h2>
                        </div>
                        <div className="glass-effect text-center rounded">
                            <img className="mx-auto py-4" src="./images/meat.png" alt="" />
                            <h2 className="py-2">Meat Dishes</h2>
                        </div>
                        <div className="glass-effect text-center rounded">
                            <img className="mx-auto py-4" src="./images/salad.png" alt="" />
                            <h2 className="py-2">Salad</h2>
                        </div>
                        <div className="glass-effect text-center rounded">
                            <img className="mx-auto py-4" src="./images/fast-food.png" alt="" />
                            <h2 className="py-2">Fast Food</h2>
                        </div>
                        <div className="glass-effect text-center rounded">
                            <img className="mx-auto py-4" src="./images/bread.png" alt="" />
                            <h2 className="py-2">Bakery</h2>
                        </div>
                        <div className="glass-effect text-center rounded">
                            <img className="mx-auto py-4" src="./images/coctail.png" alt="" />
                            <h2 className="py-2">Drinks & Cocktail</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningSection;