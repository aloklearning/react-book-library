import { PrivacyTipTwoTone } from '@mui/icons-material';

const EmptyResult = () => {
    return (
        <div style={{ paddingTop: '10%', textAlign: 'center', fontWeight: 'bold'}}>
            <PrivacyTipTwoTone sx={{ height: '1.5em', width: '1.5em' }} />
            <h2>Oops! No data found. Try searching for something else and try again.</h2>
        </div>
    );
}

export default EmptyResult;