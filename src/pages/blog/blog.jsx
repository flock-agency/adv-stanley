import { Card, CardBody, CardDescription, CardImage, CardTitle } from "./styles";

export function BlogInformation() {

    return (
        <div className="App">
            <Card>
                <CardImage
                    src="https://via.placeholder.com/300x150"
                    alt="Blog post image"
                />
                <CardBody>
                    <CardTitle>Blog Post Title</CardTitle>
                    <CardDescription>
                        This is a brief description of the blog post, which should give the
                        reader an idea of the post's content.
                    </CardDescription>
                </CardBody>
            </Card>
        </div>
    )
}