import RestoDataSource from '../../src/scripts/data/resto-datasource';

const saveDataToDB = async ({database, data}) => {
    const dataResto = await RestoDataSource.detail(data.id);
    await database.putResto(await dataResto);
}

export default saveDataToDB;
