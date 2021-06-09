import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced='right' src="https://camo.githubusercontent.com/6cad3438d083f9966c1a0d7a4119ab7ad4d8a278639c90bd6290d443c4c59367/68747470733a2f2f6968312e726564627562626c652e6e65742f696d6167652e313037363638373036362e303731362f73742c736d616c6c2c353037783530372d7061642c363030783630302c6638663866382e6a7067" />
                <Dropdown pointing="left">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
