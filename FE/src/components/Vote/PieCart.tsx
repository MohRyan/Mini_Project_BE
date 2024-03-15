import { DefaultizedPieValueType } from '@mui/x-charts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';




export const PieCart = () => {
    const data = [
        { label: 'Cintara Surya Paloh', value: 850, color: '#FF6384' },
        { label: 'Surya Surya', value: 300, color: '#FFCD56' },
        { label: 'Cintara', value: 200, color: '#36A2EB' },
    ];

    const sizing = {
        margin: { right: 0 },
        width: 480,
        height: 480,
        legend: { hidden: false },
    };

    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

    const getArcLabel = (params: DefaultizedPieValueType) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
    };
    return (
        <div className='flex flex-col items-center justify-center'>
            <b className='pb-5 text-4xl font-bold'>Hasil :</b>
            <PieChart
                series={[
                    {
                        outerRadius: 180,
                        data,
                        arcLabel: getArcLabel,
                    },
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: '',
                        fontSize: 35,
                    },
                }}
                {...sizing}
            />
            <div className='pb-5'>
                <b className='text-2xl'>Total Vote Yang Masuk : <span>{TOTAL}</span></b>
            </div>
            <div className='pb-10'>
                {data.map(e => (
                    <div className='flex justify-between space-x-10 font-bold'>
                        <p >Nama Paslon : {e.label}</p>
                        <p>Perolehan Suara : {e.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
