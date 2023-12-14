interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className="mx-auto max-w-7xl min-w-0 min-h-0">{children}</div>;
};

export default Container;
