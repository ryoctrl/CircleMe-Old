import { NextPage } from 'next';

interface Props {
    title: string;
};

const Index: NextPage<Props> = ({ title }) => (
    <div>
        <h1>Hello</h1>
        <p>{title}</p>
    </div>
);

export default Index;
