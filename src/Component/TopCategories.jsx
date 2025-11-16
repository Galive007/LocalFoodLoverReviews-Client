import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";

const TopCategories = () => {
    const categories = [
        { name: "Pizza", image: "https://i.ibb.co.com/wFSYmfPy/pizza-pollo-arrostojpg.webp" },
        { name: "Burgers", image: "https://i.ibb.co.com/67nrtwfX/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg" },
        { name: "Desserts", image: "https://i.ibb.co.com/B2hQrJR2/desserts-update.jpg" },
        { name: "Drinks", image: "https://i.ibb.co.com/Q3jZ1kjH/Untitled-design-2025-04-17-T130659-845.png" },
    ];
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <section className="bg-gray-100 py-20 px-6 md:px-20 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto text-center"
            >
                <h2 className="text-4xl font-bold text-[#212921] mb-10">
                    Top Food Categories
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                            }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="h-48 w-full object-cover hover:brightness-90 transition"
                            />
                            <motion.h3
                                className="text-xl font-semibold mt-4 mb-6 gradient-text"
                                whileHover={{ color: "#a6412f" }}
                            >
                                {cat.name}
                            </motion.h3>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default TopCategories;
