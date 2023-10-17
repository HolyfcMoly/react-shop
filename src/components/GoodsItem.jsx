function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price,
        displayAssets,
    } = props;

    const fullImg = displayAssets[1] ? displayAssets[1].full_background : displayAssets[0].full_background ;
    const fullPrice = price.finalPrice;

    return (
        <div className="card" id={mainId}>
            <div className="card-image">
            <img src={fullImg} alt={displayName}/>
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button className="btn">Купить</button>
                <span className="right price">{fullPrice} руб.</span>
            </div>
        </div>
    );
}

export { GoodsItem };

// {
//     "mainId": "CID_704_Athena_Commando_F_LollipopTrickster",
//     "displayName": "Харли Квинн",
//     "displayDescription": "Хаос — это так весело!",
//     "displayType": "Экипировка",
//     "mainType": "outfit",
//     "offerId": "v2:/e2a3d5a8eebfcdd66df162a1b68f94b8934cd948f9aeb1b2fa5be35a9f8f900c",
//     "displayAssets": [
//         {
//             "displayAsset": "DAv2_CID_704_F_LollipopTrickster",
//             "materialInstance": "MI_CID_704_F_LollipopTrickster",
//             "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_704_F_LollipopTrickster/MI_CID_704_F_LollipopTrickster.png",
//             "flipbook": null,
//             "background_texture": "https://media.fortniteapi.io/images/textures/DCUSeries.png",
//             "background": "https://media.fortniteapi.io/images/shop/e2a3d5a8eebfcdd66df162a1b68f94b8934cd948f9aeb1b2fa5be35a9f8f900c/v2/MI_CID_704_F_LollipopTrickster/background.png",
//             "full_background": "https://media.fortniteapi.io/images/shop/e2a3d5a8eebfcdd66df162a1b68f94b8934cd948f9aeb1b2fa5be35a9f8f900c/v2/MI_CID_704_F_LollipopTrickster/info.ru.png"
//         },
//         {
//             "displayAsset": "DAv2_CID_704_F_LollipopTrickster",
//             "materialInstance": "MI_CID_704_F_LollipopTrickster_02",
//             "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_704_F_LollipopTrickster/MI_CID_704_F_LollipopTrickster_02.png",
//             "flipbook": null,
//             "background_texture": "https://media.fortniteapi.io/images/textures/DCUSeries.png",
//             "background": "https://media.fortniteapi.io/images/shop/e2a3d5a8eebfcdd66df162a1b68f94b8934cd948f9aeb1b2fa5be35a9f8f900c/v2/MI_CID_704_F_LollipopTrickster_02/background.png",
//             "full_background": "https://media.fortniteapi.io/images/shop/e2a3d5a8eebfcdd66df162a1b68f94b8934cd948f9aeb1b2fa5be35a9f8f900c/v2/MI_CID_704_F_LollipopTrickster_02/info.ru.png"
//         }
//     ],
//     "firstReleaseDate": "2020-02-07",
//     "previousReleaseDate": "2023-10-16",
//     "giftAllowed": true,
//     "buyAllowed": true,
//     "price": {
//         "regularPrice": 1500,
//         "finalPrice": 1500,
//         "floorPrice": 1500
//     },
//     "rarity": {
//         "id": "Epic",
//         "name": "Эпический"
//     },
//     "series": {
//         "id": "DCUSeries",
//         "name": "СЕРИЯ DC"
//     },
//     "banner": null,
//     "offerTag": null,
//     "granted": [
//         {
//             "id": "CID_704_Athena_Commando_F_LollipopTrickster",
//             "type": {
//                 "id": "outfit",
//                 "name": "Экипировка"
//             },
//             "name": "Харли Квинн",
//             "description": "Хаос — это так весело!",
//             "rarity": {
//                 "id": "Epic",
//                 "name": "Эпический"
//             },
//             "series": {
//                 "id": "DCUSeries",
//                 "name": "СЕРИЯ DC"
//             },
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/1ac9c1fbd6c3ffa94a38d1037e4c0156/transparent.png",
//                 "featured": "https://media.fortniteapi.io/images/1ac9c1fbd6c3ffa94a38d1037e4c0156/full_featured.png",
//                 "background": "https://media.fortniteapi.io/images/cosmetics/1ac9c1fbd6c3ffa94a38d1037e4c0156/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/1ac9c1fbd6c3ffa94a38d1037e4c0156/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/1ac9c1fbd6c3ffa94a38d1037e4c0156/v2/info.ru.png"
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Cosmetics.Source.ItemShop",
//                 "Cosmetics.Filter.Season.11",
//                 "Cosmetics.UserFacingFlags.HasUpgradeQuests",
//                 "Cosmetics.Set.ElectrodeDefect",
//                 "SoundLibrary.ID.StepType.BootsHeeled",
//                 "SoundLibrary.ID.ClothingType.Generic",
//                 "SoundLibrary.ID.HandType.Bare"
//             ],
//             "set": {
//                 "id": "ElectrodeDefect",
//                 "name": "Готэм Сити",
//                 "partOf": "Входит в набор «Готэм Сити»."
//             }
//         }
//     ],
//     "priority": -2,
//     "section": {
//         "id": "DC7B",
//         "name": "DC",
//         "landingPriority": 1
//     },
//     "groupIndex": 0,
//     "storeName": "BRSpecialFeatured",
//     "tileSize": "Normal",
//     "categories": []
// },
