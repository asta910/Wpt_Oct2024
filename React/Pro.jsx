import PropTypes from 'prop-types';


    function Pro(props){
        return(
            <>
                <div className="one">
                    <h1>{props.title}</h1>
                </div>
            
            </>


        )
    }
    Pro.defaultProps={
        title : 'defaultttt',
    }
    Pro.propTypes = {
        title: PropTypes.string,
    }
    export default Pro;