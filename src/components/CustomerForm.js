import React, {useState} from 'react';
import {Alert, Backdrop, Box, Button, Modal, Snackbar, TextField, Typography} from '@mui/material';
import {styled} from '@mui/system';

const logoImageUrl = 'data:image/png;base64,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';
const baseUrl = 'http://localhost:8080';

const flagUk = "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";
const flagGr = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg";


const CenteredForm = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    padding: '2rem',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
});

const Logo = styled(Box)({
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#e6eded',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: '#fff',
});

const alertTypes = {
    SUCCESS: "success",
    ERROR: "error"
}

function CustomerForm() {
    const [formData, setFormData] = useState({outletName: '', phoneNumber: '', email: ''});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [language, setLanguage] = useState('en'); // Language state

    // Snackbar states
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertTime, setAlertTime] = useState(2000);
    const [alertSeverity, setAlertSeverity] = useState("");
    const [alertInfo, setAlertInfo] = useState({});


    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'gr' : 'en'));
    };
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const showAlert = (message, type, time = 2) => {
        setAlertSeverity(type);
        setAlertTime(time * 1000)
        setAlertMessage(message);
        setOpenSnackbar(true);
    }

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log("Submit button is pressed");
            if (formData.email === '' || formData.phoneNumber === '' || formData.outletName === '') {
                showAlert("Please fill all the required fields", alertTypes.ERROR);
                return;
            }
            const response = await fetch(`${baseUrl}/api/v1/customerForm`, {
                method: 'POST',
                Credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result) {
                setIsModalOpen(true); // Show modal on success
            } else {
                showAlert('Could not save your data. Please try again', alertTypes.ERROR);
                // alert('Submission failed. Please try again.'); // Handle error case
            }
        } catch (error) {
            console.log(error);
            showAlert('Could not save your data. Please try again', alertTypes.ERROR);
        }

    };

    return (
        <>
            <Box sx={{
                display: 'flex',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                backgroundColor: '#67BADB'
            }}>
                {/* Darken background when modal is open */}
                <Backdrop open={isModalOpen} sx={{zIndex: 1, color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.7)'}}/>

                {/* Form container */}
                <CenteredForm component="form" onSubmit={handleSubmit} sx={{position: 'relative'}}>
                    {/* Flag positioned at top-right corner inside the form */}
                    <Box sx={{position: 'absolute', top: 8, right: 8}}>
                        <img
                            src={language === 'gr' ? flagUk : flagGr}
                            alt="Flag"
                            style={{height: '20px', width: '20px', cursor: 'pointer'}}
                            onClick={toggleLanguage}
                        />
                    </Box>
                    <Logo>
                        <img alt="" src={logoImageUrl}
                             style={{width: 80, height: 80}}/>
                    </Logo>

                    <Typography variant="h5" gutterBottom>
                        {language === "en" ? "Customer Details" : "Στοιχεία Πελάτη"}
                    </Typography>
                    <TextField
                        label={language === 'en' ? 'Outlet Name' : 'Όνομα Πελάτη'}
                        name="outletName"
                        variant="outlined"
                        fullWidth
                        required
                        autoComplete="organization"
                        margin="normal"
                        value={formData.outletName}
                        onChange={handleChange}
                    />

                    <TextField
                        label={language === 'en' ? 'Phone Number' : 'Αριθμός Τηλεφώνου'}
                        name="phoneNumber"
                        variant="outlined"
                        fullWidth
                        required
                        autoComplete="tel"
                        margin="normal"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />

                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        required
                        autoComplete="email"
                        margin="normal"
                        value={formData.email}
                        onChange={handleChange}
                        // onKeyUp={(e) => {
                        //     if (e.key === 'Enter') {
                        //         handleSubmit(e);
                        //     }
                        // }}
                    />

                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{mt: 2}}
                            style={{textTransform: 'none'}}>
                        {language === "en" ? "Submit" : "Ολοκλήρωση"}
                    </Button>
                </CenteredForm>

                {/* Success Modal */}
                <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} aria-labelledby="modal-title">
                    <Box sx={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper', p: 3, borderRadius: '8px', boxShadow: 24,
                    }}>
                        <Typography id="modal-title" variant="h6" component="h2" align="center" gutterBottom>
                            {language === "en" ? "Thank you for your interest" : "Σας ευχαριστούμε για το ενδιαφέρον σας"}
                        </Typography>
                        <Typography align="center">
                            {language === "en" ? "We will contact you as soon as possible" : "Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό"}
                        </Typography>
                    </Box>
                </Modal>
            </Box>

            {/*Alerts*/}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={handleCloseSnackbar}
                message={alertMessage}
            >
                <Alert onClose={handleCloseSnackbar} severity={alertSeverity} sx={{width: '100%'}}>
                    {alertMessage}
                </Alert>
            </Snackbar>

        </>
    );
}

export default CustomerForm;
