import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const StorageDistributionChart = ({ data }) => {
    const totalGB = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <article className="space-y-6 rounded-lg border border-zinc-800 bg-zinc-900 p-6">
            <header className="space-y-2">
                <h2 className="font-semibold text-white text-xl">Storage Details</h2>
                <p className="text-zinc-400">{data[0].freeSpace} GB Free space left</p>
            </header>

            <figure className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart role="img" aria-label="Storage distribution chart">
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={4}
                            dataKey="value"
                            strokeWidth={0}
                        >
                            {data.map((entry) => (
                                <Cell
                                    key={`cell-${entry.name}`}
                                    fill={entry.color}
                                    className="transition-opacity hover:opacity-90"
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </figure>

            <div className="mb-6 text-center">
                <h3 className="font-semibold text-white text-xl">Total {totalGB} GB</h3>
                <p className="text-zinc-400">{totalGB} GB</p>
            </div>

            <ul className="flex flex-col space-y-3">
                {data.map((item) => (
                    <li key={item.name} className="flex items-center">
                        <span
                            className="mr-2 size-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                            aria-hidden="true"
                        />
                        <span className="text-zinc-300">{item.name}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default StorageDistributionChart;
