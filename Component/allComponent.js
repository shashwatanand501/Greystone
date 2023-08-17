class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `  <header class="header">
        <div class="Logo">
            <h1><a href='../Index.html'>TWIN STORY</a></h1>
        </div>
        <button class="hamburger" onclick="toggleSideNav()">&#9776;</button>

        <div class="pages_link">
            <ul>
                <li><a href=''>Shirt</a></li>
                <li><a href=''>T-Shirt</a></li>
                <li><a href=''>Jeans</a></li>
                <li><a href=''>Co-Ords</a></li>
                <li><a href=''>Chinnos</a></li>
                <li><a href=''>Shorts</a></li>
                <li><a href=''>Jackets</a></li>
                <li><a href=''>Sweaters & Hoddies</a></li>
                <li><a href=''>Boxer</a></li>
                <li><a href=''>Nighwear</a></li>
                <li><a href=''>Inner Wear</a></li>
                <li><a href='../Aboutus/about.html'>About Us</a></li>
            </ul>
        </div>
    </header>
    <div class="side-nav">
        <ul>
            <li><a href=''>Shirt</a></li>
            <li><a href=''>T-Shirt</a></li>
            <li><a href=''>Jeans</a></li>
            <li><a href=''>Co-Ords</a></li>
            <li><a href=''>Chinnos</a></li>
            <li><a href=''>Shorts</a></li>
            <li><a href=''>Jackets</a></li>
            <li><a href=''>Sweaters & Hoddies</a></li>
            <li><a href=''>Boxer</a></li>
            <li><a href=''>Nighwear</a></li>
            <li><a href=''>Inner Wear</a></li>
            <li><a href='../Aboutus/about.html'>About Us</a></li>
        </ul>
        <button class="close-btn" style="display: none;" onclick="toggleSideNav()">&times;</button>
    </div>`
    }
}
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` <footer class="footer">
        <div class="logo">
            <img src="../img/icons8-logo-50.png" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore tenetur cupiditate iure nobis a
                eius, at voluptatem rerum, recusandae fugiat illo deserunt soluta! Nobis a, placeat veritatis alias
                iusto consequuntur?</p>
        </div>
        <div class="links">
            <ul>
                <p>Navigation</p>
                <hr class="under_line">
                <li><a>Lorem ipsum</a></li>
                <li><a>Lorem ipsum</a></li>
                <li><a>Lorem ipsum</a></li>

            </ul>
            <ul>
                <p>Quick Links</p>
                <hr class="under_line">
                <li><a>Lorem ipsum</a></li>
                <li><a>Lorem ipsum</a></li>
                <li><a href='../ListingPage/ListingPage.html'>Lorem ipsum</a></li>

            </ul>
            <ul>
                <p>Follow Us</p>
                <hr class="under_line">
                <div class="social_media">
                    <a href=""><img src="../img/facebook.png"></a>
                    <a href=""><img src="../img/instagram.png"></a>
                </div>

            </ul>

        </div>

    </footer>`
    }
}
customElements.define('my-footer', Footer);
customElements.define('my-header', Header);