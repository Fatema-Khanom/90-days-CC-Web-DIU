
import { LineChart as LChart, Line,XAxis, YAxis } from 'recharts';  
const LineChart = () => {
    const studentData = [
        { id: 1, name: "John Smith", math: 85, physics: 78, chemistry: 92 },
        { id: 2, name: "Emily Johnson", math: 92, physics: 88, chemistry: 79 },
        { id: 3, name: "Michael Davis", math: 78, physics: 90, chemistry: 85 },
        { id: 4, name: "Sarah Wilson", math: 89, physics: 81, chemistry: 93 },
        { id: 5, name: "David Jones", math: 67, physics: 72, chemistry: 68 },
        { id: 6, name: "Jessica Brown", math: 95, physics: 89, chemistry: 91 },
        { id: 7, name: "Christopher Lee", math: 73, physics: 76, chemistry: 80 },
        { id: 8, name: "Amanda Martin", math: 88, physics: 83, chemistry: 87 },
        { id: 9, name: "Matthew Taylor", math: 81, physics: 85, chemistry: 82 },
        { id: 10, name: "Olivia Harris", math: 70, physics: 72, chemistry: 71 },
      ];
      
      
    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            <Line dataKey="math" stroke='red' > </Line>
            <Line dataKey="physics" stroke='green'> </Line>
            <Line dataKey="chemistry" > </Line>
            </LChart>
        
        </div>
    );
};

export default LineChart;