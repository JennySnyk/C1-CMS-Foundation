import { connect } from 'react-redux';
import Immutable from 'immutable';
import SearchPage from 'console/components/presentation/SearchPage.js';

function mapStateToProps() {
	// Get facets, search results
	return {
		facetGroups: Immutable.fromJS([
			{
				name: 'testgroup',
				header: 'Test group 1',
				facets: [
					{
						name: 'facet1',
						label: 'Facet One'
					},
					{
						name: 'facet2',
						label: 'Facet Two'
					},
					{
						name: 'facet3',
						label: 'Facet Three'
					}
				]
			}
		]),
		resultColumns: Immutable.fromJS([
			{ name: 'name', label: 'Label' },
			{ name: 'type', label: 'Data type' },
			{ name: 'description', label: 'Description' },
			{ name: 'creationDate', label: 'Created' },
			{ name: 'createdBy', label: 'Author' },
			{ name: 'published', label: 'Published?' }
		]),
		results: Immutable.fromJS([
			{
				name: 'Components',
				type: 'C1 Page',
				description: 'This section contains pages that show off the different layouts and styling options.',
				creationDate: '2016 Dec 14',
				createdBy: 'admin',
				published: 'published',
			},
			{
				name: 'Navigation',
				type: 'C1 Page',
				description: 'Test things like deep structures and labels that are darn long.',
				creationDate: '2016 Dec 14',
				createdBy: 'admin',
				published: 'published',
			},
			{
				name: 'Styles',
				type: 'C1 Page',
				description: 'This page contains different elements that you can define with the Visual Editor in the CMS Console.',
				creationDate: '2016 Dec 14',
				createdBy: 'admin',
				published: 'published',
			}
		]),
		searchFieldValue: 'Test',
		searchString: 'Test'
	};
}

const ConnectSearchPage = connect(mapStateToProps)(SearchPage);

export default ConnectSearchPage;
