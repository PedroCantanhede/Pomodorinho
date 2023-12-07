import { StyleSheet } from 'react-native'
import { theme } from '../theme'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerTop: {
		backgroundColor: theme.colors.brand.red,
		width: '100%',
		height: 90,
		marginBottom: 100
	},
	titleText: {
		fontWeight: 'bold',
		color: theme.colors.brand.red,
		alignItems: 'center',
		justifyContent: 'center',
	},
	content: {
		paddingTop: 70,
	},
	tasksContainer: {
		flex: 1,
		marginTop: 55,
		marginHorizontal: 24,
	},
	tasksCreated: {
		color: theme.colors.brand.red,
		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.bold,
	},
	tasksDone: {
		color: theme.colors.brand.green,
		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.bold,
	},
	info: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	counterContainer: {
		width: 25,
		height: 19,
		borderRadius: 999,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 8,
	},
	counterText: {
		color: theme.colors.base.gray300,
		fontSize: theme.font_size.sm,
		fontFamily: theme.font_family.bold,
	},
})
