const removeDataFromDB = async ({database, data}) => {
  await database.deleteResto(data.id);
}

export default removeDataFromDB;
