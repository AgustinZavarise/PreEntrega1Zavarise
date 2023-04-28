import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MensajeDeCompra = ({ purchaseID }) => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='success'>
				Su pago se ha acreditado con exito! su id de transacción es: {purchaseID}
			</Alert>
		</Stack>
	);
};

export default MensajeDeCompra;