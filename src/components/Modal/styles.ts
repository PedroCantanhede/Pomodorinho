import { StyleSheet } from 'react-native';
import { theme } from '../../theme/index'

export const styles = StyleSheet.create({
	
	/* Modal */
	containerModal: {
		backgroundColor: theme.colors.base.white,
		borderRadius: 10,
		alignItems: 'center',
		overflow: 'hidden', 
	  },
	  headerTopModal: {
		backgroundColor: theme.colors.brand.red,
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		alignItems: 'center', 
		width: '100%',
		height: 50,
		marginBottom: 30,
		paddingHorizontal: 20, 
	  },
	titleModal: {
		color: theme.colors.base.white,
		fontFamily: theme.font_family.bold,
		paddingLeft: 20,
	},
	imageModal: {
		width: 120,
		height: 120,
		marginBottom: 20
	},
	timerModal: {
		color: theme.colors.brand.red,
		fontFamily: theme.font_family.bold,
		letterSpacing: 12,
		fontSize: 30,
		marginBottom: 30
	},
	buttonModal: {
		backgroundColor: theme.colors.brand.red,
		paddingVertical: 10, 
		paddingHorizontal: 20, 
		borderRadius: 4, 
		marginTop: 10, 
		marginBottom: 40,
	  },
	  buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	  },
	  buttonModalText: {
		color: theme.colors.base.white,
		fontFamily: theme.font_family.bold,
		fontSize: theme.font_size.md,
		textTransform: 'uppercase',
	  },
	  message: {
		color: theme.colors.brand.green,
		fontFamily: theme.font_family.bold,
		fontSize: theme.font_size.lg,
		marginBottom: 10,
	  },
	  inputContainer: {
		width: "100%",
		flexDirection: "column",
		alignItems: "center",
		marginVertical: 10,
	  },
	  input: {
		height: 40,
		borderColor: theme.colors.brand.red,
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginVertical: 5,
		width: "80%",
	  },
	  captionInput: {
		color: theme.colors.brand.red,
		fontFamily: theme.font_family.bold,
		fontSize: theme.font_size.md,
		textAlign: 'left',  
		width: "80%",  
	  },
})
