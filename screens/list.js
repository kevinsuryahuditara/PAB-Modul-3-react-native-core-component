// // import {
// //     FlatList,
// //     Image,
// //     Text,
// //     TouchableOpacity,
// //     View,
// //     StyleSheet,
// //   } from "react-native";
  
// //   // Dummmy Data (Array of Object)
// //   const datas = [
// //     {
// //       id: 1,
// //       title:
// //         "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
// //     },
// //     {
// //       id: 2,
// //       title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
// //     },
// //     {
// //       id: 3,
// //       title:
// //         "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
// //     },
// //     {
// //       id: 4,
// //       title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
// //     },
// //     {
// //       id: 5,
// //       title:
// //         "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
// //     },
// //     {
// //       id: 6,
// //       title:
// //         "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
// //     },
// //     {
// //       id: 7,
// //       title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
// //     },
// //     {
// //       id: 8,
// //       title:
// //         "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
// //     },
// //     {
// //       id: 9,
// //       title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
// //     },
// //     {
// //       id: 10,
// //       title:
// //         "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
// //       image:
// //         "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
// //     },
// //   ];
  
// //   // Functional Component
// //   const List = () => {
// //     // Arrow Function with destructured argument
// //     const renderItem = ({ item }) => {
// //       return (
// //         <TouchableOpacity style={styles.view} onPress={() => alert("Pressed")}>
// //           <View>
// //             <Image source={{ uri: item.image }} style={styles.image} />
// //             <Text style={styles.text}>{item.title}</Text>
// //           </View>
// //         </TouchableOpacity>
// //       );
// //     };
  
// //     return (
// //       <FlatList
// //         data={datas}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item.id}
// //       />
// //     );
// //   };
  
// //   // Styles
// //   const styles = StyleSheet.create({
// //     view: {
// //       padding: 15,
// //       borderBottomColor: "#dddddd",
// //       borderBottomWidth: 1,
// //     },
// //     image: {
// //       height: 200,
// //       width: null,
// //     },
// //     text: {
// //       fontSize: 18,
// //       paddingTop: 10,
// //     },
// //   });
  
// //   export default List;

// import {
//   FlatList,
//   Image,
//   Text,
//   TouchableOpacity,
//   View,
//   StyleSheet,
//   Modal,
//   Pressable,
// } from "react-native";

// import { useState } from "react";

// //  Data Dummy (Array of Object)
// const datas = [
//   {
//     id: 1,
//     title:
//       "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
//   },
//   {
//     id: 2,
//     title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
//   },
//   {
//     id: 3,
//     title:
//       "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//   },
//   {
//     id: 4,
//     title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
//   },
//   {
//     id: 5,
//     title:
//       "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
//   },
//   {
//     id: 6,
//     title:
//       "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
//   },
//   {
//     id: 7,
//     title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
//   },
//   {
//     id: 8,
//     title:
//       "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//   },
//   {
//     id: 9,
//     title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
//   },
//   {
//     id: 10,
//     title:
//       "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
//     image:
//       "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
//   },
// ];

// // Functional Component
//  List = () => {
//   // modal contoh
//   const [modalVisible, setModalVisible] = useState(false);
//   const [itemSelect, setItemSelect] = useState('variabel kosong');
// const
//   console.log(itemSelect);
//   // Arrow Function with destructured argument
//   const renderItem = ({ item }) => {

//     return (
//       <TouchableOpacity style={styles.view} onPress={() => {setModalVisible(true); setItemSelect(item)}}>
//         <View>
//           <Modal
//           animationType="none"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() =>{
//           setModalVisible(!modalVisible);
//           }}>
//             <View style={styles.modalView}>
//             <Image style={styles.modalImage} source={{ uri: itemSelect.image }} />
//             <Text>{itemSelect ? itemSelect.title : 'test'}</Text>
//             <View style={{  alignItems: 'center'}}>
//           <Pressable
//           style={[ styles.button, styles.buttonClose ]}
//           onPress={() => setModalVisible(!modalVisible)}>
//           <Text style={{ padding: 5 }}>Tutup</Text>
//           </Pressable>
//               </View>
//             </View>
//           </Modal>
//           <Image source={{ uri: item.image }} style={styles.image} />
//             <Text style={styles.text}>{item.title}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <FlatList
//       data={datas}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//     />
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   view: {
//     padding: 20,
//     paddingTop: 10,
//     borderBottomColor: "#dddddd",
//     borderBottomWidth: 1,
//   },
//   image: {
//     height: 200,
//     width: null,
//   },
//   text: {
//     fontSize: 18,
//     paddingTop: 10,
//   },
//   modalView: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       margin: 20,
//       marginTop:160,
//       backgroundColor: 'white',
//       borderRadius: 20,
//       padding: 30,
//       alignItems: 'center',
//       shadowColor: '#0d0d0d',
//       shadowOffset: {
//         width: 0,
//         height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 10,
//     padding: 10,
//     marginTop:5,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#fa0a0a',
//   },
//   modalImage: {
//       height: 250,
//       width: '80%',
//       borderRadius: 8,
//       marginBottom: 20,
//   },
// });

// export default List;

// import {
//     FlatList,
//     Image,
//     Text,
//     TouchableOpacity,
//     View,
//     StyleSheet,
//     Modal,
//     Pressable
//   } from "react-native";

import { FlatList, Text, View, Image, Button, ButtonText } from '@gluestack-ui/themed';
import { useState } from 'react';
import { TouchableOpacity, Modal } from 'react-native';
  
  // Dummmy Data (Array of Object) 
  const datas = [
    {
      id: 1,
      title:
        "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
      id: 2,
      title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
      id: 3,
      title:
        "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
      id: 4,
      title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
      id: 5,
      title:
        "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
    {
      id: 6,
      title:
        "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
      id: 7,
      title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
      id: 8,
      title:
        "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
      id: 9,
      title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
      id: 10,
      title:
        "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
  ];
  
  // Functional Component
  const List = () => {
    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [itemSelect, setItemSelect] = useState('kosong');
    
    // console.log(itemSelect);

    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
      // console.log(item);
      return (
        <TouchableOpacity onPress={() => {setShowModal(true); setItemSelect(item)}}>
          <View mx={15}>
            <Modal
              visible={showModal}
              transparent={true}
            >
              <View
                justifyContent= 'center'
                alignItems= 'center'
                margin= {20}
                backgroundColor= 'white'
                borderRadius= {20}
                padding= {20}
                onRequestClose={() => {setShowModal(!showModal)}} 
              >
              <Image source={{uri: itemSelect.image }} alt='wleo'             
                resizeMode='contain'
                h= {300}
                w= '100%'
              />
              <Text>{itemSelect ? itemSelect.title : 'wleowleo'}</Text>
              <Button my={15} onPress={() => setShowModal(!showModal)}>
                <ButtonText>Close</ButtonText>
              </Button>
              </View>
            </Modal>
            <Image w='100%' h={200} my={10} source={{ uri: item.image }} alt='wleo' />
            <Text fontSize={18}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    };
  
    return (
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };
  

  export default List;
