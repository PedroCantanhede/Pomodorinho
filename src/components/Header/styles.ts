import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
	headerContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		position: 'relative',
	},
	titleText: {
		paddingBottom: 60,
		color: theme.colors.brand.red,
		fontSize: 20,
		fontFamily: theme.font_family.bold,
	},
	form: {
		position: 'absolute',
		bottom: -54 / 2,
		height: 54,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		height: 54,
		width: '75%',
		borderRadius: 5,
		padding: 16,
		color: theme.colors.base.gray500,
		marginRight: 4,
		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.regular,
		borderColor: theme.colors.base.gray300,
		borderWidth: 1,
	},
	inputBorder: {
		borderColor: theme.colors.brand.red,
	},
	button: {
		height: 54,
		width: 54,
		borderRadius: 5,
		backgroundColor: theme.colors.brand.red,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
