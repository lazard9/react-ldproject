import PuffLoader from "react-spinners/PuffLoader";

const override = {
    display: 'block',
    margin: '150px auto',
};

const SpinnerPuffLoader = () => {
    return (
        <PuffLoader
            color="hsl(194, 97%, 55%)"
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default SpinnerPuffLoader;
