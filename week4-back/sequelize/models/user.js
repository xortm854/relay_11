module.exports = (sequelize, DataTypes) => {

    const user = sequelize.define(
        "user", // 테이블 이름
        {
            // 스키마 정의
            id: {
                // column 이름
                type: DataTypes.STRING(255), // 데이터 타입 설정
                primaryKey: true,
                allowNull: false, // null 허용 설정,
            },
            nickname: {
                type: DataTypes.STRING(255), // 데이터 타입 설정
                primaryKey: true,
                allowNull: false // null 허용 설정
            },
            music: {
                type: DataTypes.INTEGER ,
                allowNull: true
            },
            sports: {
                type: DataTypes.INTEGER ,
                allowNull: true
            },
            movie: {
                type: DataTypes.INTEGER ,
                allowNull: true
            },
            game: {
                type: DataTypes.INTEGER ,
                allowNull: true
            },
            travel: {
                type: DataTypes.INTEGER ,
                allowNull: true
            },
        }, {
            // 테이블 옵션
            timestamps: true,
            underscored: true,
            paranoid: true
        }
    );

    return user
};